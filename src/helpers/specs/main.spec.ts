console.log("inside main spec 1 !!!")
import jasmin from "jasmine";
import { bootstrapApp, ActionApp } from "@wbce/actions";
import { DockerAction } from "./actions-test";
let j = new jasmin();

j.loadConfig({
    spec_dir: '.',
    spec_files: [
        //'docker-executor.spec.ts',
        'cdk-action.spec.ts'
    ]
})

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2147483647;

console.log("inside main spec 2 !!!")



ActionApp.waitForActiveApp.then(()=>{
    const defaultApp = ActionApp.getActiveApp();
    defaultApp.ActionModel.remove({}).then(()=>{
        j.execute();
    })
})