import Conteiner from '../components/conteiner';
import axios from 'axios';
import { useState } from 'react';


const Index = ({record}) => {
   const [modifiedData, setModifiedData] = useState({
      description: ' ',
      fkcompany: '1'
   });

   const [companies, setCompanies] = useState(
      record
   );

   const setRecord = ({ target: { name, value } }) => {
      setModifiedData(prev => ({
         ...prev,
         [name]: value,
      }));
   };

   const changesRecord = async e => {
      e.preventDefault();
      try {
         const response = await axios.post('http://localhost:1337/questions', modifiedData)
         const componyList = await axios.get(' http://localhost:1337/companies');
         setCompanies(componyList.data)
      } catch (error) {
         setErrorRestaurants(error);
      }
   };
   return (
      <Conteiner company={companies} modifiedData={modifiedData} setRecord={setRecord} changesRecord={changesRecord}></Conteiner>
   );
}

Index.getInitialProps = async () => {
   const response = await axios.get(' http://localhost:1337/companies');
   return { record: response.data }
};

export default Index;

