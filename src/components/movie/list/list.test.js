/* eslint-disable no-promise-executor-return */
import { screen } from '@testing-library/dom';
import { BrowserRouter } from 'react-router';
import { render } from '@testing-library/react';
import { act } from 'react';
import MoviesList from '.';

const mockData = {
  name: 'GRATIS | Recién añadidas',
  movies: [
    {
      id: 'noche-de-caza',
      title: 'Noche de caza',
      images: {
        artwork: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/8a36b44d-7363-4c35-bc22-20c36b19be5f.jpeg',
      },
    },
    {
      id: 'la-higuera-de-los-bastardos',
      title: 'La higuera de los bastardos',
      images: {
        artwork: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/2df5c620-ea25-48cf-95aa-b6fd376018c5.jpeg',
      },
    },
    {
      id: 'negociador-1998',
      title: 'El negociador',
      images: {
        artwork: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/ed02c445-423d-471f-b439-57dff2144707.jpeg',
      },
    },
    {
      id: 'jumper',
      title: 'Jumper',
      images: {
        artwork: 'https://images-3.rakuten.tv/storage/global-movie/translation/artwork/16d37223-2a84-461e-bdfc-3741c0099f8d.jpeg',
      },
    },
    {
      id: 'en-temporada-baja',
      title: 'En temporada baja',
      images: {
        artwork: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/7ba2d65d-9566-4b6b-bffd-1136db7d5a7a.jpeg',
      },
    },
    {
      id: 'blanco-perfecto-downrange',
      title: 'Blanco Perfecto (Downrange)',
      images: {
        artwork: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/a4069218-67c8-4bbd-ba7b-25a52459b6ef-blanco-perfecto-downrange-1611322879.jpeg',
      },
    },
    {
      id: 'el-titiritero',
      title: 'El titiritero',
      images: {
        artwork: 'https://images-1.rakuten.tv/storage/global-movie/translation/artwork/98f1489e-8fdd-474b-b2f8-dd60bd3e8084.png',
      },
    },
    {
      id: 'l-a-confidential',
      title: 'L.A. Confidential',
      images: {
        artwork: 'https://images-0.rakuten.tv/storage/global-movie/translation/artwork/671130dc-4d5c-4733-ad0d-e757387f2a8c.jpeg',
      },
    },
    {
      id: 'rabid',
      title: 'Rabid',
      images: {
        artwork: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/c9b8ac86-b924-4c6d-95f6-399af6584c6e.jpeg',
      },
    },
    {
      id: 'in-time',
      title: 'In Time',
      images: {
        artwork: 'https://images-2.rakuten.tv/storage/global-movie/translation/artwork/ac83c603-5dbf-43da-996a-5fc99559c128.jpeg',
      },
    },
  ],
};

describe('Movie List', () => {
  /* it('Loading component is shown:', () => {
    fetch.mockImplementation(() => new Promise(() => { })); // Unresolved promise
    render(
      <BrowserRouter>
        <MoviesList name={123} />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('loading-movie-list')).toBeInTheDocument();
  }); */

  it('List name is shown:', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <MoviesList name="free-recently-added" />
        </BrowserRouter>,
      );
    });

    const text = await screen.findByText(mockData.name);

    expect(text).toBeInTheDocument();
  });

  /* it('debería renderizar el título y las películas cuando la carga es exitosa', async () => {
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    await act(
      async () => {
        render(
          <BrowserRouter>
            <MoviesList name={123} />
          </BrowserRouter>,
        );
      },
    );

    // Espera a que la promesa del fetch se resuelva y el componente se re-renderice
    await screen.findByText('Título del Listado'); // Asume que tienes un título para el listado

    // Verifica que se rendericen los títulos de las películas
    expect(screen.getByText('Película 1')).toBeInTheDocument();
    expect(screen.getByText('Película 2')).toBeInTheDocument();

    // Verifica que se rendericen las portadas (puedes buscar por atributos alt o src)
    expect(screen.getByAltText('Póster de Película 1')).toBeInTheDocument();
    expect(screen.getByAltText('Póster de Película 2')).toBeInTheDocument();
  }); */
});
