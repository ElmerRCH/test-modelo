import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {Component, HostListener, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-form-imagen',
  templateUrl: './form-imagen.component.html',
  styleUrls: ['./form-imagen.component.css']
})
export class FormImagenComponent {
  @Input() tipo = 'cortar';

  form: FormGroup;
  selectedFile: File | null = null;
  imageUrl: string = '';
  displayForm: boolean = true;
  displaycortar: boolean = true;
  verificarModelo: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient,private sanitizer: DomSanitizer) {
    this.form = this.fb.group({
      fileInput: [null, Validators.required],
    });
  }
  onFileSelected(event: any) {
    const fileInput = event.target;
    this.selectedFile = fileInput.files[0];
  }
  ngOnInit(): void {
  }

  uploadImage() {
    if (this.tipo === 'cortar'){

      if (this.selectedFile) {
        const formData = new FormData();

        formData.append('image', this.selectedFile);
        this.http.post('http://0.0.0.0:8300/probar-modelo',formData).subscribe(
          (response) => {

            const url  = `http://0.0.0.0:8300/static/${response}`;
            console.log('url::::',url)
            let imageUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            console.log('datos:',imageUrl)
            const valores = Object.values(imageUrl);

            this.imageUrl = valores[0]

            console.log('type',typeof imageUrl)
            console.log('Respuesta del servidor:',imageUrl);
            this.displaycortar = true

          },
          (error) => {
            console.error('Error al enviar datos:', error);
          }
        );
      };
    }

    if (this.tipo === 'verificarModelo'){
      if (this.selectedFile) {
        const formData = new FormData();

        formData.append('image', this.selectedFile);
        this.http.post('http://0.0.0.0:8300/probar-modelo',formData).subscribe(
          (response) => {

            const url  = `http://0.0.0.0:8300/static/${response}`;
            console.log('url::::',url)
            let imageUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            console.log('datos:',imageUrl)
            const valores = Object.values(imageUrl);

            this.imageUrl = valores[0]

            console.log('type',typeof imageUrl)
            console.log('Respuesta del servidor:',imageUrl);
            this.verificarModelo = true;

          },
          (error) => {
            console.error('Error al enviar datos:', error);
          }
        );
      };
    }
    this.displayForm = true;

  }
}
