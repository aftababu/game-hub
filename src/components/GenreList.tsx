import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropImageUrl from "../image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <> 
    <Heading fontSize={"2xl"} marginBottom={3}>Genre</Heading>
       <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              objectFit={"cover"}
              borderRadius={8}
              src={getCropImageUrl(genre.image_background)}
            />
            <Button
              textAlign={"left"}
              whiteSpace={"normal"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={"lg"}
              onClick={() => onSelectedGenre(genre)}
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>

  );
};

export default GenreList;
