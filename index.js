import ms from './src/ms.js';
import mac from './src/mac.js';
import maptc from './src/maptc.js';
import mapaa from './src/mapaa.js';

//Solución en modo sincrónico
ms.realizarSolucion('./package.json')

//Solución en modo asincrónico con callbacks
mac.realizarSolucion('./package.json') 

//Solución en modo asincrónico con promises (sintaxis then catch)
maptc.realizarSolucion('./package.json')

//Solución en modo asincrónico con promises (sintaxis async await)
mapaa.realizarSolucion('./package.json')