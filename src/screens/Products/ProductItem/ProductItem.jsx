import { Component } from "react";
import styled from "styled-components";

class ProductsItem extends Component {
  componentDidMount() {
    const { renderedCount } = this.props;
    this.props.renderedCount();
  }

  componentWillUnmount() {
    const { renderedCount } = this.props;
    this.props.renderedCount(true);
  }

  handleCheck = (e) => {
    const { add, remove } = this.props;
    e.target.checked ? add() : remove();
  };

  render() {
    const { item } = this.props;
    return (
      <Li>
        <h3>
          <a onClick={() => this.props.selectProduct(item)}>{item.name}</a>
        </h3>
        <input type="checkbox" onChange={this.handleCheck} />
      </Li>
    );
  }
}

const Li = styled.li`
  display: flex;
  justify-content: space-between;
`;

export default ProductsItem;
