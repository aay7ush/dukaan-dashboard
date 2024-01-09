type NavItemProps = {
  id: number
  label: string
  icon: string
  href: string
}

type NavLinkProps = {
  item: NavItemProps
  isActive: boolean
  onClick: () => void
}

type CustomButtonProps = {
  title?: string
  icon: string
}

type CardProps = {
  title: string
  data: string
}
