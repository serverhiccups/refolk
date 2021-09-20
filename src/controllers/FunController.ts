import confetti from "canvas-confetti";

import { Controller } from "./Controller";

export class FunController {
    controller: Controller;

    constructor(controller: Controller) {
        this.controller = controller;
    }

    setConfetti(b: boolean) {
        this.controller.settings.setSettings({...this.controller.settings.settings, fun: {...this.controller.settings.settings.fun, confetti: b}})
    }

    confetti() {
        if(this.controller.settings.settings.fun.confetti) {
            confetti({
                
            });
        }
    }
}