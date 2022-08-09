import urlFor from './urlFor'

const portableTextComponent = {
    // block: {
    //   h1: (props) => <h1 className='title'>{props.children}</h1>
    // },
    // types: {
    //   image: (props) => {
    //     return <img src={urlFor(props.value).url()}/>
    //   }
    // },
    // list: (props) => {
    //   return <ul className='list'>{props.children}</ul>
    // },
    marks: {
      // add font color
      color: (props) => {
      return <span style={{color: props.value.hex}}>{props.children}</span>
    }
    }
  }

export default portableTextComponent