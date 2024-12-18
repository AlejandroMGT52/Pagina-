import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Propiedad profileForm correctamente declarada como opcional y inicializada
  profileForm!: FormGroup;

  // Carrusel de imágenes
  images: string[] = [
    'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/6OWYVABUZFBEXCEFFZNIIO2OBU.jpg',
    'https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2021/06/lamborghini-gallardo-ny-2362489.jpg?tf=3840x',
    'https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/lamborghini-dubai-20161.jpg',
    'https://acnews.blob.core.windows.net/imgnews/large/NAZ_63371a1ebfe8499dab989cd1017606e0.jpg',
    'https://robbreport.com/wp-content/uploads/2024/08/GettyImages-1487176436.jpg?w=800',
    'https://cdn-images.motor.es/image/m/1320w/fotos-noticias/2020/11/lamborghini-countach-p-400-s-sereis-2-ferruccio-lamborghini-202072920-1605719053_2.jpg'
  ];

  // Opciones de carrusel para adaptarse a diferentes tamaños de pantalla
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  // Inyectar FormBuilder para crear el formulario
  constructor(private fb: FormBuilder) {}

  // Inicializar el formulario con los controles
  ngOnInit() {
    // Aquí inicializamos el formulario
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] // Checkbox con validación
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
