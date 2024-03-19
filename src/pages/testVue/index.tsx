import { connect } from "umi";
import {applyVueInReact, applyPureVueInReact} from 'veaury'
// This is a Vue component
import BasicVue from '@/components/vueComponents/test1'
import {useState} from 'react'
function TestVue(props) {
  const { user, dispatch } = props;
  const BasicWithPure = applyPureVueInReact(BasicVue)
  return (
    <div>
      <h2>测试</h2>
      <BasicWithPure>
      
    </BasicWithPure>
    </div>
  );
}
export default TestVue;
