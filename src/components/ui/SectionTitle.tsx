import Badge from "./Badge";
import Heading from "./Heading";
import Text from "./Text";

type Props = {
  badge?: string;
  title: React.ReactNode;
  description?: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl">

      {badge && (
        <Badge>{badge}</Badge>
      )}

      <Heading
        level={2}
        className="mt-4"
      >
        {title}
      </Heading>

      {description && (
        <Text
          size="bodyLg"
          className="mt-8"
        >
          {description}
        </Text>
      )}

    </div>
  );
}