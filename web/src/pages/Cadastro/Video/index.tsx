import React, { useEffect, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

//#region PAGES
import useForm from '../../../hooks/useForm';
import LayoutShared from '../../../components/LayoutShared';
import FormField from '../../../components/FormField';
//#endregion

//#region Import SVG
import homeIcon from '../../../assets/icons/home.svg';
import categoryIcon from '../../../assets/icons/categoria.svg';
import videoIcon from '../../../assets/icons/video.svg';
//#endregion

import { Container } from './styles';
import api from '../../../services/api';

interface ICategory{
  id: number;
  name: string;
  description: string;
  color: string;
}

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ name }) => name);
 
  const { values, handleChange } = useForm({
    title: '',
    url: '',
    category: '',
  });

//#region FUNCTIONS
  function handleSubmit(event: FormEvent){
    event.preventDefault();
    const categoriaEscolhida:any = categories.find((category:ICategory) => {
      return category.name === values.category;
    });

    if(categoriaEscolhida === undefined){
      return;
    }
    else{
      api.post('videos',{
        title: values.title,
        url: values.url,
        fk_categories_id: categoriaEscolhida.id
      }).then(() => {
        console.log('Cadastrou com sucesso!');
        history.push('/');
      });
    }
  }
  useEffect(() => {
    api.get('categories').then((response: any) => {
        setCategories(response.data);
      });
  }, []);
//#endregion

  return (
      <>
        <LayoutShared>
          <Container>
          <h1><img src={videoIcon} alt="Cadastro de Vídeo"></img>Cadastro de Video</h1>

            <form onSubmit={handleSubmit}>
              <FormField 
                  id="title"
                  label="Título do vídeo"
                  name="title" 
                  type="text" 
                  placeholder="Digite o título do Vídeo" 
                  onChange={handleChange} 
              />

              <FormField 
                  id="url"
                  label="URL"
                  name="url" 
                  type="text" 
                  placeholder="Digite a url do Vídeo" 
                  onChange={handleChange} 
              />
              <FormField 
                  id="category"
                  label="Categoria"
                  name="category" 
                  type="text" 
                  placeholder="Digite a Categoria do Vídeo" 
                  onChange={handleChange}
                  suggestions={categoryTitles} 
              />

              <button type="submit"> Cadastrar </button>
            </form>

            <br />
            <br />

            <div style={{maxWidth: "820px",display: "flex", justifyContent: "space-between"}}>
              <Link to="/cadastro/categoria"><img src={categoryIcon} alt="Página de Categoria"></img> Cadastrar Categoria </Link>
              <Link to="/"><img src={homeIcon} alt="Home Page"></img> Voltar para Home</Link>
            </div>
          </Container>
        </LayoutShared>
      </>
  );
}

export default CadastroVideo;