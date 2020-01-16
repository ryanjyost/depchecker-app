import socketIOClient from 'socket.io-client';
import { $ApiBaseUrl } from 'Config';
import { actions as BasicActions } from 'Store/basic';
import { dispatch } from 'Store';

export default function createSocket() {
   const socket = socketIOClient($ApiBaseUrl, {
      forceNew: true
   });

   /**
    * Listeners
    */
   // initial ping from server-side that socket opened
   socket.on('socketId', data => {
      console.log('SOCKET ID', data);
   });

   socket.on('basic/packageJSON', data => dispatch(BasicActions.updatePackageJSON(data)));
   socket.on('basic/singleDepData', data => dispatch(BasicActions.updateSingleDep(data)));
   socket.on('basic/finalRepoData', data => dispatch(BasicActions.updateSummary(data)));

   /**
    * Emitters
    */
   const analyzeRepoUrl = url => socket.emit('analyzeRepoUrl', url);
   const analyzePackageJSON = packageJSON => socket.emit('analyzePackageJSON', packageJSON);

   return {
      analyzeRepoUrl,
      analyzePackageJSON
   };
}
