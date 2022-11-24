import { isUndefined } from "util";
import axios from "axios";
import Cookies from "universal-cookie";
import app from "../../app.json";

const cookies = new Cookies();
const { APIHOST } = app;

export function calcularExpirarSesion() {
  const now = new Date().getTime();
  const newDate = now + 60 * 30 * 1000;
  return new Date(newDate);
}

export function getSession() {
  return isUndefined(cookies.get("_s")) ? false : cookies.get("_s");
}

function renovarSesion() {
  const sesion = getSession();
  if (!sesion) window.location.href = "/login";

  cookies.set("_s", sesion, {
    path: "/",
    expires: calcularExpirarSesion(),
  });
  return sesion;
}

export const request = {
  get: function (services) {
    let token = renovarSesion();
    return axios.get(`${APIHOST}${services}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

//En la Cookies capturo el token al hacer login, hago un proceso de validacion para que se expire el tiempo de abierta la sesion en cierto tiempo.
//Tambien se hace un proceso de salida para cuando se salga el usuario se devuelva al login
//Dentro del request le digo que el token va quedar autorizado y va quedar en el headers'
//Capturamois el token a traves de las cookies por medioo de la variable "_s"
