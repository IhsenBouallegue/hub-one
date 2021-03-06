import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Title,
  useMantineTheme,
  Image,
} from "@mantine/core";
import { Link as ScrollLink } from "react-scroll";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: theme.white,
    marginTop: 40,
  },

  inner: {
    position: "relative",
    paddingTop: 100,
    paddingBottom: 200,
    margin: "auto",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.25,
    margin: 0,
    padding: 0,
    color: theme.black,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: 2 * theme.spacing.xl,
    fontSize: 24,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: 3 * theme.spacing.xl,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginTop: theme.spacing.xl,
    },
  },

  cta: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: 18,
      paddingRight: 18,
      width: "100%",
      flex: 1,
    },
  },

  ctaContainer: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flex: 1,
    },
  },

  secondaryCta: {
    borderWidth: 2,
    borderColor: theme.colors.dark[9],
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: `${theme.colors.gray[0]} !important`,
    },
  },

  background: {
    position: "absolute",
    width: "35vh",
    left: "52%",
    bottom: "0",
  },
}));

export function Hero({ companyName }: { companyName?: string }) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const name = () => {
    return (
      <Text component="span" inherit>
        {" for "}
        <Text
          component="span"
          variant="gradient"
          gradient={{
            from: "#ff008c",
            to: "#0cd4f7",
          }}
          inherit
        >
          {companyName}
        </Text>
        .
      </Text>
    );
  };
  return (
    <div className={classes.wrapper}>
      <Image src="background.svg" className={classes.background} />
      <Container size={800} className={classes.inner}>
        <Title order={1} className={classes.title}>
          The{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{
              from: theme.colors.brand[4],
              to: theme.colors.secondary[4],
            }}
            inherit
          >
            one hub
          </Text>{" "}
          you will ever need
          {companyName ? name() : "."}
        </Title>

        <Text className={classes.description} color="dimmed">
          Tired of keeping track of new websites? Tired of having to update your
          bookmarks every few weeks? Access all sites from this one page.
          Everything is up to date. No need to clutter your life anymore!
        </Text>

        <Group className={classes.controls}>
          <ScrollLink
            className={classes.ctaContainer}
            to="linkSection"
            smooth="easeInOutQuint"
            duration={1000}
          >
            <Button
              size="xl"
              className={classes.cta}
              variant="gradient"
              gradient={{
                from: theme.colors.brand[4],
                to: theme.colors.secondary[4],
              }}
            >
              Browse Links
            </Button>
          </ScrollLink>

          <Button
            component="a"
            size="xl"
            variant="outline"
            className={cx(classes.cta, classes.secondaryCta)}
            color="dark"
          >
            Add Yours
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default Hero;
