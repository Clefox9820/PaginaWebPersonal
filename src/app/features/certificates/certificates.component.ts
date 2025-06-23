import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import certData from '../../../assets/data/certificates.json';
import { CertificateList } from '../../core/models/certificates.model';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent {
  //Se obtiene el array de certificados
  certificatesList: CertificateList[] = certData;

  constructor() {}
}
