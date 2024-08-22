import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IFilme } from '../Model/IFilmes';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public router: Router,
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  listaFilmes: IFilme[] =[
    {
      nome: "Meu Pintinho Amarelinho",
      lancamento: "23/10/2006",
      duracao: "1h50m",
      classificacao: 10,
      cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/trvE4SuBytWm7OUoLvg1YpTSBZL.jpg",
      generos: ["Aventura", "Fantasia", "Comédia"],
      pagina: "/meupintinhoamarelinho",
      favorito: false,
    },
    {
      nome: "Wallace, O Pinto Astuto",
      lancamento: "19/02/2002",
      duracao: "1h30m",
      classificacao: 7,
      cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o5qYkbCnScrnzbXITCGSmO69m0U.jpg",
      generos: ["Aventura", "Fantasia", "Drama"],
      pagina: "/wallacemeupintoastuto",
      favorito: false,
    }
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme){
    const alert = await this.alertController.create({

      header: 'Meu Favoritos',
      message: 'Deseja realmente favopritar o filme?',
      buttons: [
        {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          filme.favorito=false;
        }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(){
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}

