import * as React from "react";
import "./style.scss";
import Paragraph from "../../Typeography/Paragraph";

export interface ISliderProps {
  min?: number;
  max?: number;
  value: number;
  label?: string;
  interval?: number;
  onChange: (value: number) => void;
}

class Slider extends React.Component<ISliderProps> {
  public static defaultProps = {
    min: 0,
    max: 100,
    interval: 1
  };

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange(parseInt(event.target.value));
  }

  getPercentage() {
    return (this.props.value / (this.props.max || 100)) * 100;
  }

  render() {
    return (
      <div className="slider__container">
        {this.props.label && (
          <Paragraph type="callout">{this.props.label}</Paragraph>
        )}
        <input
          id="myRange"
          type="range"
          className="slider"
          style={{
            background: `linear-gradient(to right, #5333ff 0%, #5333ff ${this.getPercentage()}%, #e1e8f3 ${this.getPercentage()}%, #e1e8f3 100%)`
          }}
          min={this.props.min}
          max={this.props.max}
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default Slider;
