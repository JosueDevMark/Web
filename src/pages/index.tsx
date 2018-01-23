import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted={true}
        isAnimate={true}
      />
    </Segment>
    <h1>About me:</h1>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor lorem placerat, feugiat ex tincidunt, sollicitudin felis. Aenean dictum sollicitudin purus non fermentum. Curabitur convallis nisl id tellus suscipit porttitor. Cras interdum elementum quam sed sollicitudin. Sed semper risus magna, ullamcorper faucibus ex iaculis ut. Sed condimentum sed urna eu lacinia. Mauris dapibus, nisl et mollis faucibus, quam urna feugiat lacus, eget pulvinar nisi neque nec leo. Integer condimentum lacus ac est pretium finibus. Nam sollicitudin sem non velit varius placerat. Suspendisse placerat blandit felis id gravida. Aenean et dignissim nisi. Nunc luctus massa in augue porttitor, a congue leo dictum. Praesent accumsan aliquam augue eu tristique.

Proin lorem odio, consectetur nec erat id, laoreet fringilla sapien. Sed pretium vulputate augue, eget volutpat neque vestibulum id. Maecenas ut nisi libero. Proin eget enim ut erat volutpat iaculis et id dui. In finibus orci quam, vitae faucibus dolor venenatis sed. Nunc ullamcorper nulla id diam aliquet, eget accumsan dolor hendrerit. Suspendisse in tristique ante. Maecenas et convallis sapien. Nulla vestibulum lorem non libero bibendum, hendrerit commodo metus varius. Integer in commodo metus.

Integer vitae turpis vel ipsum tristique congue. Fusce nec orci id risus scelerisque hendrerit. Duis finibus rutrum diam, at mollis sem maximus eu. Nunc mollis purus ac velit interdum, sit amet sodales ipsum imperdiet. Aenean aliquet dolor bibendum diam vulputate, commodo scelerisque justo auctor. Nunc sed ex nec lorem vestibulum pellentesque egestas id leo. Donec a consequat lorem.</div>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor lorem placerat, feugiat ex tincidunt, sollicitudin felis. Aenean dictum sollicitudin purus non fermentum. Curabitur convallis nisl id tellus suscipit porttitor. Cras interdum elementum quam sed sollicitudin. Sed semper risus magna, ullamcorper faucibus ex iaculis ut. Sed condimentum sed urna eu lacinia. Mauris dapibus, nisl et mollis faucibus, quam urna feugiat lacus, eget pulvinar nisi neque nec leo. Integer condimentum lacus ac est pretium finibus. Nam sollicitudin sem non velit varius placerat. Suspendisse placerat blandit felis id gravida. Aenean et dignissim nisi. Nunc luctus massa in augue porttitor, a congue leo dictum. Praesent accumsan aliquam augue eu tristique.

Proin lorem odio, consectetur nec erat id, laoreet fringilla sapien. Sed pretium vulputate augue, eget volutpat neque vestibulum id. Maecenas ut nisi libero. Proin eget enim ut erat volutpat iaculis et id dui. In finibus orci quam, vitae faucibus dolor venenatis sed. Nunc ullamcorper nulla id diam aliquet, eget accumsan dolor hendrerit. Suspendisse in tristique ante. Maecenas et convallis sapien. Nulla vestibulum lorem non libero bibendum, hendrerit commodo metus varius. Integer in commodo metus.

Integer vitae turpis vel ipsum tristique congue. Fusce nec orci id risus scelerisque hendrerit. Duis finibus rutrum diam, at mollis sem maximus eu. Nunc mollis purus ac velit interdum, sit amet sodales ipsum imperdiet. Aenean aliquet dolor bibendum diam vulputate, commodo scelerisque justo auctor. Nunc sed ex nec lorem vestibulum pellentesque egestas id leo. Donec a consequat lorem.</div>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor lorem placerat, feugiat ex tincidunt, sollicitudin felis. Aenean dictum sollicitudin purus non fermentum. Curabitur convallis nisl id tellus suscipit porttitor. Cras interdum elementum quam sed sollicitudin. Sed semper risus magna, ullamcorper faucibus ex iaculis ut. Sed condimentum sed urna eu lacinia. Mauris dapibus, nisl et mollis faucibus, quam urna feugiat lacus, eget pulvinar nisi neque nec leo. Integer condimentum lacus ac est pretium finibus. Nam sollicitudin sem non velit varius placerat. Suspendisse placerat blandit felis id gravida. Aenean et dignissim nisi. Nunc luctus massa in augue porttitor, a congue leo dictum. Praesent accumsan aliquam augue eu tristique.

Proin lorem odio, consectetur nec erat id, laoreet fringilla sapien. Sed pretium vulputate augue, eget volutpat neque vestibulum id. Maecenas ut nisi libero. Proin eget enim ut erat volutpat iaculis et id dui. In finibus orci quam, vitae faucibus dolor venenatis sed. Nunc ullamcorper nulla id diam aliquet, eget accumsan dolor hendrerit. Suspendisse in tristique ante. Maecenas et convallis sapien. Nulla vestibulum lorem non libero bibendum, hendrerit commodo metus varius. Integer in commodo metus.

Integer vitae turpis vel ipsum tristique congue. Fusce nec orci id risus scelerisque hendrerit. Duis finibus rutrum diam, at mollis sem maximus eu. Nunc mollis purus ac velit interdum, sit amet sodales ipsum imperdiet. Aenean aliquet dolor bibendum diam vulputate, commodo scelerisque justo auctor. Nunc sed ex nec lorem vestibulum pellentesque egestas id leo. Donec a consequat lorem.</div>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor lorem placerat, feugiat ex tincidunt, sollicitudin felis. Aenean dictum sollicitudin purus non fermentum. Curabitur convallis nisl id tellus suscipit porttitor. Cras interdum elementum quam sed sollicitudin. Sed semper risus magna, ullamcorper faucibus ex iaculis ut. Sed condimentum sed urna eu lacinia. Mauris dapibus, nisl et mollis faucibus, quam urna feugiat lacus, eget pulvinar nisi neque nec leo. Integer condimentum lacus ac est pretium finibus. Nam sollicitudin sem non velit varius placerat. Suspendisse placerat blandit felis id gravida. Aenean et dignissim nisi. Nunc luctus massa in augue porttitor, a congue leo dictum. Praesent accumsan aliquam augue eu tristique.

Proin lorem odio, consectetur nec erat id, laoreet fringilla sapien. Sed pretium vulputate augue, eget volutpat neque vestibulum id. Maecenas ut nisi libero. Proin eget enim ut erat volutpat iaculis et id dui. In finibus orci quam, vitae faucibus dolor venenatis sed. Nunc ullamcorper nulla id diam aliquet, eget accumsan dolor hendrerit. Suspendisse in tristique ante. Maecenas et convallis sapien. Nulla vestibulum lorem non libero bibendum, hendrerit commodo metus varius. Integer in commodo metus.

Integer vitae turpis vel ipsum tristique congue. Fusce nec orci id risus scelerisque hendrerit. Duis finibus rutrum diam, at mollis sem maximus eu. Nunc mollis purus ac velit interdum, sit amet sodales ipsum imperdiet. Aenean aliquet dolor bibendum diam vulputate, commodo scelerisque justo auctor. Nunc sed ex nec lorem vestibulum pellentesque egestas id leo. Donec a consequat lorem.</div>
  </div>;
