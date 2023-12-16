import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-check-modelo',
  templateUrl: './check-modelo.component.html',
  styleUrls: ['./check-modelo.component.css']
})
export class CheckModeloComponent {
  form: FormGroup;
  selectedFile: File | null = null;
  imageUrl: string = '';
  mostrarDiv: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient,private sanitizer: DomSanitizer) {
    this.form = this.fb.group({
      fileInput: [null, Validators.required],
    });
  }
  onFileSelected(event: any) {
    const fileInput = event.target;
    this.selectedFile = fileInput.files[0];
  }
  uploadImage() {
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
          this.mostrarDiv = true;

        },
        (error) => {
          console.error('Error al enviar datos:', error);
        }
      );
    };
  }
}
