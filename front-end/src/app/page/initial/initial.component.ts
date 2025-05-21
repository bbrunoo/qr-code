import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QrcodeService } from './../../services/qrcode.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-initial',
  imports: [FormsModule, CommonModule],
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent {
  content: string = '';
  qrImageUrl: string | null = null;

  constructor(private service: QrcodeService) {}

  generateQR() {
    if (!this.content.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Campo vazio',
        text: 'Digite algum conteúdo para gerar o QR Code',
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    this.service.generateQrCode(this.content).subscribe({
      next: (data: any) => {
        this.qrImageUrl = this.service.getQrCodeUrl(data.filename);
        Swal.fire({
          icon: 'success',
          title: 'QR Code gerado!',
          timer: 1500,
          showConfirmButton: false
        });
      },
      error: (err) => {
        console.error("erro ao gerar o qrcode ", err);
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Não foi possível gerar o QR Code',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  }

   limpar() {
    this.content = '';
    this.qrImageUrl = null;

    Swal.fire({
      icon: 'info',
      title: 'Limpando...',
      timer: 1000,
      showConfirmButton: false
    });
  }
  
}
