import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Image,
  useMantineTheme,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { X, ChevronDown } from "tabler-icons-react";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function HeaderBar({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown size={12} />
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container px="xl" className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
          <Image src="/logo/hubone_logo_full.svg" fit="contain" height={40} />
          <X size={20} strokeWidth={1} color="black" />
          <Image src="/logo/hubone_logo.svg" fit="contain" height={28} />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button
          variant="gradient"
          gradient={{
            from: theme.colors.brand[4],
            to: theme.colors.secondary[4],
          }}
          sx={{ height: 30 }}
        >
          Browse Links
        </Button>
      </Container>
    </Header>
  );
}