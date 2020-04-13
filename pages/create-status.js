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
              Você teve febre?
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Sim" />Sim
            </label>
            <label className="block">
              <input className="" type="radio" name="febre" value="Não" defaultChecked />Não
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="sintomas">
              Você teve algum desses sintomas?
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Coriza
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Nariz entupido
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Cansaço
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Tosse
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Dor de cabeça
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Dores no corpo ou mal estar
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Dor de garganta
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Diarréia ou dores abdominais
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Perda de olfato (não sentir cheiro)
            </label>
            <label className="block">
              <input className="" type="checkbox" name="sintomas" />Perda do paladar (não sentir gosto)
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Você teve algum desses outros sintomas?
            </label>
            <label className="block">
              <input className="" type="checkbox" name="febre" value="Sim" />Tive vomitos ou convulsão ou falta de ar ou dificuldade para respirar ou dedos azulados e pálidos
            </label>
            <label className="block">
              <input className="" type="checkbox" name="febre" value="Não" defaultChecked />Não tive nenhum outro sintoma
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="febre">
              Você está grávida ou tem mais de 80 anos?
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
      <button onClick={getMyLocation} className="my-8 py-4 px-2 rounded bg-pink-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white">Buscar minha localização</button>
      <button onClick={save} className="my-8 py-4 px-2 rounded bg-pink-800 font-bold shadow-xl hover:shadow block w-1/4 text-center mx-auto text-white">Salvar meu status</button>
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