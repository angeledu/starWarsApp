/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

import { QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={ queryClient }>
         <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    </QueryClientProvider>
   
  )
}


export default App;