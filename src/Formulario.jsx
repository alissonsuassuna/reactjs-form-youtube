import React, { useState } from 'react';

const Formulario = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        cargo: ''
    })

    const handleChange = (event) => {
        const {name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }
 
  return (

    <main>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="imput-name" className="form-label">Nome</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="imput-name"
                    name='nome' 
                    value={formData.nome}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="input-email" className="form-label">E-mail</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="input-email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="cargo-administrativo">
                <input className="form-check-input" 
                    type="radio" 
                    id="cargo-administrativo"
                    name="cargo"
                    value="Administrativo"
                    checked={formData.cargo === 'Administrativo'}
                    onChange={handleChange}
                    />
                    Administrativo
                </label>
            </div>

            <div className="form-check">
                <label className="form-check-label" htmlFor="cargo-tecnico">
                <input className="form-check-input" 
                    type="radio" 
                    id="cargo-tecnico"
                    name="cargo"
                    value="Técnico"
                    checked={formData.cargo === 'Técnico'}
                    onChange={handleChange} 
                    />
                    Técnico
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </main>
   
  );
};

export default Formulario;
