import { DockerAction } from "./actions-test";
import {ActionState} from "@wbce/actions";

describe("Test action", ()=>{
    const testAction = new DockerAction();
    testAction.setArgument({y : 1});

    beforeAll(()=>{
        spyOn(testAction, 'init');
        return testAction.dbDoc.save().then(()=>{
            return new Promise<void>(resolve=>{
                setTimeout(()=>{
                    resolve();
                }, 2*60*1000)
            })
        }).then(()=>{
            return testAction.resyncWithDb();
        });
    })

    it("should  be a success", ()=>{
        expect(testAction.dbDoc.state).toEqual(ActionState.SUCCESS);
        expect(testAction.result.z).toEqual(10);
    })

    afterAll(()=>{
        return testAction.dbDoc.remove();
    })
    
})