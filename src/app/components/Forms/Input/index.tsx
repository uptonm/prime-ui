import * as React from "react";
import Paragraph from "../../Typeography/Paragraph";
import "./style.scss";

export interface IInputProps {
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  size?: "medium" | "large";
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  error?: string;
}

class Input extends React.Component<IInputProps> {
  public static defaultProps = {
    size: "large"
  };

  render() {
    return (
      <div className="input">
        <Paragraph type="caption" color="black" style={{ marginBottom: "5px" }}>
          {this.props.label}
        </Paragraph>
        <input
          id=""
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          className={`
            input__field 
            input__field--${this.props.size}
            ${this.props.error ? "input__field--error" : ""}
            ${
              !this.props.error && this.props.value !== ""
                ? "input__field--success"
                : ""
            }
            ${this.props.size}-radius
          `}
        />
        <Paragraph type="caption" color="error" style={{ marginTop: "5px" }}>
          {this.props.error}
        </Paragraph>
      </div>
    );
  }
}

export default Input;
