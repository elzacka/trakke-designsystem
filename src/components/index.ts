/**
 * TRÅKKE DESIGN SYSTEM
 * Main Components Export
 * 
 * @package @trakke/design-system
 * @version 2.0.0
 */

// Primitive Components
export { Button, type ButtonProps, type ButtonVariant, type ButtonSize } from './Button';
export { Icon, type IconProps, type IconName, type IconSize } from './Icon';
export { Spinner, type SpinnerProps, type SpinnerSize, type SpinnerVariant } from './Spinner';
export { Text, type TextVariant, type TextColor, type TextWeight, type TextAlign } from './Text';

// Form Components
export { Input, type InputProps, type InputSize, type InputVariant } from './Input';
export { Checkbox, type CheckboxProps, type CheckboxSize } from './Checkbox';
export { Switch, type SwitchProps, type SwitchSize } from './Switch';

// Layout Components
export { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter,
  type CardProps, 
  type CardVariant, 
  type CardPadding 
} from './Card';
export { Sheet, type SheetProps, type SheetHeight } from './Sheet';

// Navigation Components
export { FAB, type FABProps, type FABMenuItem, type FABSize, type FABVariant, type FABPosition } from './FAB';

// Feedback Components
export { Badge, type BadgeProps, type BadgeVariant, type BadgeSize } from './Badge';
export { Toast, type ToastProps, type ToastVariant, type ToastPosition } from './Toast';

// Brand Components
export { Logo, type LogoProps, type LogoVariant, type LogoSize, type LogoColor } from './Logo';
