/* @flow */

import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  RowHeadlineImageIcon,
  RowHeadlineImageCaption,
  RowSingleLineHeadlineImageCaption,
  RowBodyIcon,
  Divider,
  withTheme,
  RowBodyCheckbox,
} from "@draftbit/ui";
import type { Theme } from "@draftbit/ui/types";

type Props = {
  theme: Theme
};

class RowExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props;

    return (
      <ScrollView style={[styles.container, { backgroundColor: background }]}>
        <Text
          style={{ marginHorizontal: spacing.large, marginTop: spacing.large }}
        >
          RowSingleLineHeadlineImageIcon
        </Text>
        <RowHeadlineImageIcon
          title="Headline"
          image="https://via.placeholder.com/24"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineHeadlineImageIcon with long title
        </Text>
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          image="https://via.placeholder.com/24"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineHeadlineIcon
        </Text>
        <RowHeadlineImageIcon title="Headline" icon="check" />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineHeadlineIcon with long title
        </Text>
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineHeadlineImageIcon
        </Text>
        <RowHeadlineImageIcon
          title="Headline"
          subtitle="Subtitle"
          image="https://via.placeholder.com/48"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineHeadlineImageIcon with long title and subtitle
        </Text>
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          image="https://via.placeholder.com/48"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowMultiLineHeadlineImageIcon with long title and subtitle
        </Text>
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          multilineSubtitle
          image="https://via.placeholder.com/48"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineHeadlineIcon
        </Text>
        <RowHeadlineImageIcon
          title="Headline"
          subtitle="Subtitle"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineHeadlineIcon with long title
        </Text>
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowMultiLineHeadlineIcon with long title
        </Text>
        <RowHeadlineImageIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          multilineSubtitle
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineHeadlineImageCaption
        </Text>
        <RowHeadlineImageCaption
          title="Headline"
          caption="Caption"
          image="https://via.placeholder.com/24"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineHeadlineImageCaption with long title
        </Text>
        <RowHeadlineImageCaption
          title="Headline that is quite long so that it won't fit on a single line"
          caption="Caption"
          image="https://via.placeholder.com/24"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineHeadlineCaption
        </Text>
        <RowHeadlineImageCaption title="Headline" caption="Caption" />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineHeadlineCaption with long title
        </Text>
        <RowHeadlineImageCaption
          title="Headline that is quite long so that it won't fit on a single line"
          caption="Caption"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineHeadlineImageCaption
        </Text>
        <RowHeadlineImageCaption
          title="Headline"
          subtitle="Subtitle"
          caption="Caption"
          image="https://via.placeholder.com/48"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineHeadlineImageCaption with long title
        </Text>
        <RowHeadlineImageCaption
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          caption="Caption"
          image="https://via.placeholder.com/48"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineHeadlineCaption
        </Text>
        <RowHeadlineImageCaption
          title="Headline"
          subtitle="Subtitle"
          caption="Caption"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineHeadlineCaption with long title
        </Text>
        <RowHeadlineImageCaption
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          caption="Caption"
        />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineBodyIcon
        </Text>
        <RowBodyIcon title="Headline" icon="check" />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowSingleLineBodyIcon with long title
        </Text>
        <RowBodyIcon
          title="Headline that is quite long so that it won't fit on a single line"
          icon="check"
        />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineBodyIcon
        </Text>
        <RowBodyIcon title="Headline" subtitle="Subtitle" icon="check" />
        <Divider style={{ marginBottom: spacing.large }} />
        <Text style={{ marginHorizontal: spacing.large }}>
          RowDoubleLineBodyIcon with long title and subtitle
        </Text>
        <RowBodyIcon
          title="Headline that is quite long so that it won't fit on a single line"
          subtitle="Subtitle that is quite long so that it won't fit on a single line"
          icon="check"
        />
        <RowBodyCheckbox
          title="Headline"
          subtitle="subtitle"
          status="checked"
        />
        <Divider style={{ marginBottom: spacing.large }} />
          <Text style={{ marginHorizontal: spacing.large }}>
            RowDoubleLineBodyIcon with long title and subtitle
          </Text>
        <RowBodyCheckbox
          title="Headline"
          status="checked"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withTheme(RowExample);
