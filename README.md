# Rakuten TV - Front-end Test

This is my project for the Rakuten TV Front-end Test. It's a a web application that simulates the Rakuten TV website. It consists of a main page with various film listings as well as detailed information and trailers for these films.


## Start 🚀

Get a clone of the project in local. You need to have installed nodejs and npm
in your computer to run and develop the project locally.


### Requirements 📋

_You need to install nodejs and npm_


### Instalation 🔧

_First clone the repository_

```
git clone https://github.com/janpc/rakuten-tv-test.git
```

_Then run yarn install in the base folder_

```
npm install
```

_When you have all the denpedencies you can start the project_

```
npm run dev
```


## Build with 🛠️

- [npm](https://www.npmjs.com/)
- [React](https://es.reactjs.org/)
- [Styled Components](https://styled-components.com/)

I have chosen these technologies because I wanted to make a simple project and I wanted them to be as similar as possible to those used in Rakuten TV. I didn't use redux because I didn't think it was necessary to have a global state of the whole application.

He uasdo la ultima version de react y algunas de sus nuevas funcionalidades porque me ha parecido un buena excusa para probarlas. Esto me ha pasado factura a la hora de hacer los test porque no hay mucha documentación al respecto.

## Things to improve

I haven't had much time so there are quite a few things to improve. The first and most important is the tests that I have not been able to implement them. Although I had already done tests with asynchronous calls to apis with mocked results, I haven't found the way to do them with the Suspense component.

Another thing I would improve would be the design in general and especially the responsive part. I have tried to imitate the design of the rakuten website but I haven't had enough time to do it as I would like. And in the responsive part I think it's not bad but it can be improved.

Finally, I think that the accessibility should also be improved because, although I have been checking and improving small things, it could be reviewed well and see that everything is accessible correctly by keyboard, that all images and links have an alternative text, that the element in which the user is (when there is hover or focus) is highlighted...
