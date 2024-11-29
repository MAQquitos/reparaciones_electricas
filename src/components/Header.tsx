import React from 'react';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <Zap className="w-16 h-16 text-blue-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Contáctanos hoy!</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Nos especializamos en la reparación de generadores eléctricos, garantizando calidad, 
        rapidez y soluciones confiables. Completa el formulario a continuación y nuestro 
        equipo experto se pondrá en contacto contigo para atender tus necesidades. 
        ¡Estamos aquí para ayudarte!
      </p>
    </header>
  );
}