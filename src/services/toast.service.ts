import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

    public constructor(public toastCtrl: ToastController) { }

    public present(message: string, position: string = "middle", duration: number = 5000) {
        let toast = this.toastCtrl.create({
            message: message || "",
            duration: duration,
            position: position,
            closeButtonText: "x",
            showCloseButton: true,
            cssClass: ""
        });
        toast.present();
    }
}