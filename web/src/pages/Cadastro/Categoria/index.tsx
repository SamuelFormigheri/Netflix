import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

//#region PAGES
import LayoutShared from '../../../components/LayoutShared';
import FormField from '../../../components/FormField';
import FormTextArea from '../../../components/FormTextArea';
//#endregion

import useForm from '../../../hooks/useForm';

//#region Import SVG
import homeIcon from '../../../assets/icons/home.svg';
import videoIcon from '../../../assets/icons/video.svg';
import categoryIcon from '../../../assets/icons/categoria.svg';
// import deleteIcon from '../../../assets/icons/delete.svg';
//#endregion

import { Container } from './styles';
import api from '../../../services/api';

interface ICategory{
  id: number;
  name: string;
  description: string;
  color: string;
}

function CadastroCategoria() {
  var initialValues = {
    name: '',
    description: '',
    color: ''
  }
  const [categories, setCategories] = useState<ICategory[]>([]);

  //#region FUNCTIONS

  const { values, handleChange, clearForm } = useForm(initialValues);

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    api.post('categories',{
      name: values.name,
      description: values.description,
      color: values.color
    }).then((response)=>{
      console.log('Cadastrou com sucesso!');
      clearForm();
      const newCategory: ICategory = {
        id: response.data,
        name: values.name,
        description: values.description,
        color: values.color 
      } 
      setCategories([...categories, newCategory]);
    })
  }

  useEffect(() => {
      api.get('categories').then((response:any)=>{
        setCategories(response.data);
      });
  }, []);
  //#endregion

  return (
      <>
        <LayoutShared>
          <Container>
            <h1><img src={categoryIcon} alt="Cadastro de Categoria"></img>Cadastro de Categoria {values.name}</h1>
            <form onSubmit={handleSubmit}>
              <FormField 
                  id="inputCategoryName"
                  label="Nome da Categoria"
                  name="name" 
                  type="text" 
                  placeholder="Digite o nome da Categoria" 
                  onChange={handleChange} 
              />
              <FormTextArea 
                  id="inputCategoryDescription"
                  label="Descrição"
                  name="description" 
                  placeholder="Digite a descrição da Categoria" 
                  onChange={handleChange} 
              />
              <FormField 
                  id="inputCategoryColor"
                  label="Cor"
                  name="color" 
                  type="color" 
                  onChange={handleChange} 
              />
              <button>
                Cadastrar
              </button>
                <h2>Categorias Cadastradas</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                  {categories && categories.length > 0 && categories.map((category: ICategory, index) => {
                    return (
                      <tr key={`${category}${index}`}>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        {/* <td><img src={deleteIcon} alt="Excluir" onClick={() => {categoriesRepository.deleteCategory(category.id).then(() => {console.log('Excluiu com sucesso!');});}}></img></td> */}
                      </tr>
                    )
                  })}
                  </tbody>
                </table>

            </form>
            <div style={{maxWidth: "820px",display: "flex", justifyContent: "space-between"}}>
              <Link to="/cadastro/video"><img src={videoIcon} alt="Página de Vídeo"></img> Cadastrar Vídeo</Link>
              <Link to="/"><img src={homeIcon} alt="Home Page"></img> Voltar para Home</Link>
            </div>
          </Container>
        </LayoutShared>
      </>
  );
}

export default CadastroCategoria;