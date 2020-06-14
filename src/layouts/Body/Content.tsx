import React from "react";
import MDXLayout from '../../layouts_mdx/layout'
import {Props, MDX} from './index'

class Content extends React.Component<Props> {
  render() {
    return (
      <div style={{ maxWidth: "45rem", margin: "auto" }}>
        {/* body part */}
        <MDXLayout mdx={this.props.mdx}/>
      </div>
    );
  }
}

export default Content;
