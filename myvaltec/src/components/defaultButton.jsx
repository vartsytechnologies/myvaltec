import Button from 'react-bootstrap/Button'

function DefaultButton(props){
    return(
    <>
        <Button variant="danger" size='lg'>{props.name}</Button>{' '}
    </>
    )
}

export default DefaultButton

