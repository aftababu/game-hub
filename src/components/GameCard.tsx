import { Games } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropImageUrl from "../image-url";
import Emoji from "./Emoji";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCropImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between" flexWrap="wrap">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name} <Emoji rating={game.rating_top} /></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
