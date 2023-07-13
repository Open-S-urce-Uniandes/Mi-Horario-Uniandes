// Clase principal para manejo de la vista
import { ViewModel } from "./view-model/ViewModel.mjs";
const viewModel = new ViewModel();

// Empieza a ejecutar incluso antes de cargar imágenes y CSS
// Bind se asegura que se llame la función en el contexto del view
window.addEventListener('DOMContentLoaded', viewModel.start.bind(viewModel));  