import React, { PureComponent } from 'react';
import { asset } from 'react-360';
import Entity from 'Entity';

export default class Pony extends PureComponent {
  render() {
    return (
      <Entity
        source={{gltf2: asset('pony/scene.gltf')}}
        style={{transform:[
          {translate: [-10, 0, -10]}
        ]}}
      />
    );
  }
}
