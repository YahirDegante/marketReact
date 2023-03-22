import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = withReactContent(Swal);
export const msjConfirmacion = 'Le solicitamos esperar un momento a que la solicitud termine';
export const titleConfirmacion = '¿Estas seguro de realizar la accion solicitada?';
export const msjExito = 'La actividad solicitada se realizo con exito';
export const titleExito = 'Accion realizada exitosamente';
export const msjError = 'No se ha logardor realizar la actividad solicitada';
export const titleError = 'Error al realizar la accion';
export default Alert;