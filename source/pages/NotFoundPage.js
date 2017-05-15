import React from "react";

import Main from "../components/Layout/Main";
import Section from "../components/Layout/Section";
import { SearchBarContainer } from '../components/SearchBar';
import { ContentNavegacionCategoriasContainer } from "../components/ContentNavegacionCategorias";

const NotFoundPage = () => {

    return (
		<Main>

			<div className="clear"></div>

			<Section renderInOneCol={true}>

				<h2 className="h1 text-center">Página no encontrada</h2>
				<p className="text-center">La información que buscas no fué encontrada o la misma se dio de baja. <br/>
		           Te invitamos a que uses el buscador o explorar en las siguientes categorías.
	           	</p>

	           	<br/>
	           	<SearchBarContainer inputClassName={"input-lg"}/>

	        </Section>

	        <ContentNavegacionCategoriasContainer />
        	
      	</Main>
	)
}

export default NotFoundPage