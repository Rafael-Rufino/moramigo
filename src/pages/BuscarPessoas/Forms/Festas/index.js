import { useState } from 'react';


const Festas = () => {

  const [FormValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('data', name, value);
    setFormValues({ ...FormValues, [name]: value });
  }

  return (
    <div>
    <label>Festas</label>
    <select name="festas" onChange={handleInputChange} value={FormValues.festas || ''}>
      <option value="">Selecione</option>
      <option value="S">Podem ter festa</option>
      <option value="N">Sem festas</option>
      <option value="T">Tanto faz</option>
    </select>
    </div>
  );

}

export default Festas;
