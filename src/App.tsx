import { MoviesProvider } from './hooks/Movies';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import './styles/content.scss';
import './styles/sidebar.scss';

export function App() {
  return (
    <MoviesProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>
  )
}