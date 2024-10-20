import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumb_pdf_merger_tool from '../public/works/pdf-merger.png'
import thumb_urm from '../public/works/urm.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="pdf-merger-tool"
              title="PDF Merger Tool"
              thumbnail={thumb_pdf_merger_tool}
            >
              A basic PDF merging tool made with Python backend combined with
              HTML/CSS and Javascript frontend
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="urm"
              title="Unlimited Register Machine"
              thumbnail={thumb_urm}
            >
              A theoretical model of computation used to perform basic
              arithmetic operations. It illustrates how simple instructions can
              form the basis of complex algorithms.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Container>
    </Layout>
  )
}

export default Works
