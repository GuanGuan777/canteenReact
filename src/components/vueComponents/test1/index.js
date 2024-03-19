import { applyVueInReact } from 'veaury'
// import BasicVue from './test1'
import { useEffect, useState, useRef } from 'react'

// const Basic = applyVueInReact(BasicVue)
export default function () {
    const [state, setState] = useState({
        foo: Math.random(),
        currentTime: new Date().toLocaleString()
    })
    const [aa, setAa] = useState(true)
    const timer = useRef(null)
    const timer1 = useRef(null)
    useEffect(() => {
        timer.current = setInterval(() => {
            setState({
                foo: Math.random(),
                currentTime: new Date().toLocaleString()
            })
        }, 1000)
        timer1.current = setTimeout(() => {
            setAa(false)
        }, 5000)
        return () => {
            clearInterval(timer.current)
            clearInterval(timer1.current)
        }
    }, [])

    return <div>
        <h3>This example shows the basic usage of `applyVueInReact`.</h3>
        <h4>Using React components in Vue components.</h4>
        {/* <Basic></Basic> */}
    </div>
}
