"use client";
import { getInitials } from "@/helper/getInitials";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { profileStatsContainerStyles } from "./style";
import { formatDate } from "@/helper/formatDate";
import { useErrorHandling } from "@/hooks/error-handling";
import { User } from "../posts-list/types";

type StatsProps = {
  id: string;
  commentsQtd: number;
  postsQtd: number;
};

function UserProfileStats({
  userStats,
  user,
}: {
  userStats: StatsProps;
  user: User;
}) {
  const { errorValidation } = useErrorHandling();
  const theme = useTheme();

  if (!userStats.postsQtd) {
    errorValidation(userStats as any);
  }

  return (
    <Stack sx={profileStatsContainerStyles}>
      <Box display="flex" gap={1} alignItems="center">
        <Box
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          <Avatar
            sx={{
              fontSize: "1rem",
              color: "white",
              bgcolor: theme.palette.background.paper,
              border: "solid 1px white",
            }}
          >
            {getInitials(user.username)}
          </Avatar>
        </Box>
        <Typography variant="caption">{user.username}</Typography>
      </Box>

      <Box>
        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <ListItem disablePadding>
            <Typography variant="body2">
              Conta criada em:{" "}
              <Typography
                color={theme.palette.primary.light}
                variant="caption"
                component="span"
              >
                {formatDate(user.createdAt)}
              </Typography>
            </Typography>
          </ListItem>

          <ListItem disablePadding>
            <Typography variant="body2">
              Posts feitos:{" "}
              <Typography
                color={theme.palette.primary.light}
                variant="caption"
                component="span"
              >
                {userStats?.postsQtd}
              </Typography>
            </Typography>
          </ListItem>

          <ListItem disablePadding>
            <Typography variant="body2">
              Comentários feitos:{" "}
              <Typography
                color={theme.palette.primary.light}
                variant="caption"
                component="span"
              >
                {userStats?.commentsQtd}
              </Typography>
            </Typography>
          </ListItem>

          <ListItem disablePadding>
            <Typography variant="body2">
              Email vinculado:{" "}
              <Typography
                color={theme.palette.primary.light}
                variant="caption"
                component="span"
              >
                {user.email}
              </Typography>
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Divider />
    </Stack>
  );
}

export { UserProfileStats };
