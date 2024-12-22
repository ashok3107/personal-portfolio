import { ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

// type predicate - a function that will return if props is of specific type or not.
const isAnchorProps = (props: AnchorProps | ButtonProps): props is AnchorProps => {
  return 'href' in props;
}

const Button: FC<AnchorProps | ButtonProps> = (props) => {
  if (isAnchorProps(props)) {
    return (
      <a {...props}>{props.children}</a>
    )
  }
  return (
    <button {...props}>
      {props.children}
    </button>
  );
}

export default Button;