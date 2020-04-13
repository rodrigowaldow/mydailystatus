import React, { useState } from "react";
import auth0 from "../lib/auth0";
import axios from "axios";

export default function CreateStatus() {
  const [dados, setDados] = useState({
    status: "bem",
    coords: {
      lat: null,
      long: null
    }
  });

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setDados(old => {
          return {
            ...old,
            coords: {
              lat: position.coords.latitude,
              long: position.coords.longitude
            }
          }
        })
      })
    }
  }

  const onStatusChange = evt => {
    const value = evt.target.value;
    setDados(old => {
      return {
        ...old,
        status: value
      }
    })
  }

  const save = async () => {
    await axios.post("/api/save-status", dados);
  }

  return (
    <div className="container">
      <div className="w-full max-w-xs">
        <section>
          <h1>Cadastrar Status</h1>
          <p>Preencha os campos abaixo de acordo com seus sintomas.</p>
        </section>

        <form className="bg-white shadow-md rounded pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Possui febre?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Está com dor de cabeça?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Sente dores no corpo?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Tem cansaço, fadiga?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Sentimento de exautão extrema?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Possui congestão nasal?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Espirra com frequência?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Tem dor de garganta?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Tem tosse seca?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Sente falta de ar?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>
        </form>
      </div>
      <button onClick={getMyLocation}>Buscar minha localização</button>
      <button onClick={save}>Salvar meu status</button>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);

  if (session) {
    return {
      props: {
        isAuth: true,
        user: session.user,
      }
    }
  }

  return {
    props: {
      isAuth: false,
      user: {}
    }
  }
}