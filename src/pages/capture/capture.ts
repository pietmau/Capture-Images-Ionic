import {Component} from '@angular/core';
import {ActionSheetController, NavController, Platform, ToastController} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {ImageProvider} from "../../provider/provider";


@Component({
  selector: 'page-home',
  templateUrl: 'capture.html'
})
export class HomePage {
  currentImage = null;

  constructor(public navCtrl: NavController, public imageProvider: ImageProvider, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, private camera: Camera) {
  }

  capture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  private takePicture(source) {

  }
}
