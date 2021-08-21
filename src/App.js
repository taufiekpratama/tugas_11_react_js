import "semantic-ui-css/semantic.min.css";
import {
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Image,
  Grid,
  Form,
  Button,
  Divider,
  Icon,
  Input,
  Search,
  Header,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br/>

      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Cari document
              </Header>
              <Search placeholder="Search document" />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="file pdf outline" />
                Tambah Document
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
      <br/>
      <Grid columns={3}>
        <Grid.Column width="5">
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width="7">
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width="3">
          <List>
            <h3>Website Terkait</h3>
            <List.Item icon="linkify" content={<a>Google</a>}></List.Item>
            <List.Item icon="linkify" content={<a>Facebook</a>}></List.Item>
            <List.Item icon="linkify" content={<a>Semantic UI</a>}></List.Item>
            <List.Item icon="linkify" content={<a>Niomic</a>}></List.Item>
            <List.Item icon="linkify" content={<a>React</a>}></List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
