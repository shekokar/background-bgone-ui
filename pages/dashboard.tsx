// import React, { useState } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Grommet, PageHeader } from 'grommet';
// // import VoterList from "../components/VoterList";
// import FileUpload from "../components/FileUpload";
// import Output from '../components/Output';
// import Loading from '../components/Loading';

// const Dashboard = () => {
//     const [upload, setUpload] = useState({status:false,img_id:'',img_url:''})
//     const [output, setOutput] = useState({status:false,img_url:''})
//     return (
//         <Grommet style={{height:'100vh', width:'100vw',background:'linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
//           {/* <PageHeader pad='small' title='Background BGone' subtitle={'Simplify your background deletion'}/> */}
//             <div
//               style={{
//                 display: "flex",
//                 margin: 'auto',
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 gridGap: 8,
//                 position:'absolute',
//                 top:'50%',
//                 left:'50%',
//                 msTransform: 'translate(-50%, -50%)',
//                 transform: 'translate(-50%, -50%)'
//               }}
//             >
//               {/* {loading && <h4>Loading...</h4>} */}
//               {/* {!user && <Auth />} */}
//               {!upload.status && <FileUpload setUpload={setUpload}/>}
//               {upload.status && !output.status && <Loading output={output} setOutput={setOutput} img_id = {upload.img_id}/>}
//               {output.status && <Output upload={upload} output={output}/>}
//             </div> 
//         </Grommet>
//       );
// }

// export default Dashboard