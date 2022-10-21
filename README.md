# technical-test-react

## Challenge
Please write an image slider React component similar to the one in the [demo video](image_slider_demo.mp4). 


## Instruction
This React project is bundled by Vite, instead of the usual create-react-app (webpack)  

After clone this project, you need to install the packages by running
```bash
npm run install
```
To start a local development environment, run
```bash
npm run dev
```

React v18 is used in this setup. 
The only external libary is @emotion/react @emotion/styled. It is not really required to complete this challenge, but it provides an esay way to write styled components, instead of pain css.

Example of styled component:

```js
const Container = styled.div`
  display: flex;
  padding: ${props => props.pd};
`

//... some JSX Component 
function MyComponent() {
    return
      <>
        <Container pd="1rem" />
      </>
}

```
